# Step 1: Build the React app
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /MERN-react

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using nginx
FROM nginx:alpine

# Copy the build output to the nginx HTML directory
COPY --from=build /MERN-react/build /usr/share/nginx/html

# Copy the nginx configuration template file
COPY default.conf.template /etc/nginx/conf.d/default.conf.template

# Copy in entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port 80
EXPOSE 80

# Substitute the environment variables in the nginx configuration template and start nginx
CMD ["/entrypoint.sh"]