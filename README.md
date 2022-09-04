# Build and depoly **React** Apps in Docker container
## Process
* Build (dev container)
    * Create a **nodejs alpine** container 
    * Copy src code
    * Install package
    * Build code
* Depoly (prod container)
    * Create a **nginx alpine** container 
    * Copy built content from dev container

## Usage
* Compose Up <br>
    docker compose up --build -d
* Test result by open http://127.0.0.1:7080/
