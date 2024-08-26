# Use the official lightweight Node.js image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the script that will run the user's code
COPY run_code.js .

# Command to run the user's code
CMD ["node", "run_code.js"]
