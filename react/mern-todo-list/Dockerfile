FROM node:slim

# Set the working directory in the container
WORKDIR /MERN-react

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start nginx
CMD ["npm", "start"]