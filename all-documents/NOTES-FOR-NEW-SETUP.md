# Infrastructure Setup for a new LeoCDP instance

You can watch this video tutorial at the link: <a href="https://knowledge.leocdp.net/p/how-to-setup-new-software-instance-of.html" target="_blank"> How to setup a new software instance of LEO CDP </a>

## Network requirements

The installed server must have Internet connection, please set the outbound firewall rules to these domains

    https://nominatim.openstreetmap.org/search
    https://cloudservice.leocdp.com
    https://storage.googleapis.com/leocdp-license/
    http://api.ipstack.com/
    https://us1.api.mailchimp.com/3.0/ping
    https://api.sendinblue.com/v3/

## Software requirements for new server

### ArangoDB

https://www.arangodb.com/download-major/ubuntu/

	curl -OL https://download.arangodb.com/arangodb38/DEBIAN/Release.key
	sudo apt-key add - < Release.key
	echo 'deb https://download.arangodb.com/arangodb37/DEBIAN/ /' | sudo tee /etc/apt/sources.list.d/arangodb.list
	sudo apt-get install apt-transport-https
	sudo apt-get update; sudo apt-get install arangodb3=3.8.0-1
 

### Nginx Proxy

https://www.tecmint.com/install-nginx-on-ubuntu-20-04/

	sudo wget https://nginx.org/keys/nginx_signing.key
	sudo apt-key add nginx_signing.key
	
	sudo nano /etc/apt/sources.list
	deb https://nginx.org/packages/mainline/ubuntu/ focal nginx
	deb-src https://nginx.org/packages/mainline/ubuntu/ focal nginx
	
	sudo apt-get remove nginx-common
	sudo apt-get update && sudo apt-get install nginx
	sudo service nginx start


### SSL for Nginx Server

https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04

	sudo apt-get update; sudo apt install certbot python3-certbot-nginx
	sudo certbot --nginx certonly


### Java 8 JVM

https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/generic-linux-install.html

    wget -O- https://apt.corretto.aws/corretto.key | sudo apt-key add -
    sudo add-apt-repository 'deb https://apt.corretto.aws stable main'
    sudo apt-get update; sudo apt-get install -y java-1.8.0-amazon-corretto-jdk
    sudo apt-get install fontconfig

### Redis

https://vitux.com/install-redis-on-ubuntu/

    sudo apt-get update; sudo apt -y install redis-server

## Install Notes for Linux Server

### For new server

	sudo adduser leocdp; sudo usermod -aG sudo leocdp
	sudo -iu leocdp
 
- sudo visudo => Add the following line at the end of file: leocdp ALL=(ALL) NOPASSWD: ALL

	sudo mkdir /build; sudo chown leocdp:leocdp /build/
	cd /build; git clone https://github.com/trieu/leo-cdp-free-edition.git

### DNS hosts for LEO CDP servers 

Command to edit hosts: 
	
	sudo nano /etc/hosts

#### Add Local DNS for all servers

- [the network IP of ArangoDB Server] leocdp.database
- [the network IP of Redis Server] leocdp.redis
- [the network IP of LeoCDP Admin] leocdp.admin
- [the network IP of LeoCDP Data Observer] leocdp.observer0

#### Example DNS for 1 ArangoDB server, 1 Redis server, 1 Admin Dashboard and 2 data observers

	10.2.0.5 leocdp.database
	10.4.0.3 leocdp.redis
	10.4.0.3 leocdp.admin
	10.1.0.8 leocdp.observer1
	10.1.0.11 leocdp.observer2