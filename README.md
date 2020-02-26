
<h1 align="center">
  NETOP
  <br>
</h1>

<h4 align="center">GlobalLogic DevOps ProCamp</h4>

<p align="center">
  <a href="https://pages.github.com">
    <img src="https://img.shields.io/badge/Deploy-DockerHub-blue.svg?style=for-the-badge&logo=docker"
         alt="GitGub Pages">
  </a>
  <a href="https://pages.github.com">
    <img src="https://img.shields.io/badge/Deploy-GitHub-green.svg?style=for-the-badge&logo=github"
         alt="GitGub Pages">
  </a>
</p>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

## How To Use

#### From GitHub
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/EugeneFenko/GL-DevOps-ProCamp.git

# Go into the repository folder
$ cd GL-DevOps-ProCamp

# Run the app
$ npm run netop mem  or  $ npm run netop cpu
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

#### From Docker

Run command:
```docker
docker run -e SHOW=mem gt60/netop 
```

#### From Docker-compose
Create file: docker-compose.yml

```Docker 
version: '3.3'
services:
    netop:
        environment:
            - SHOW=mem
        image: gt60/netop
```

Run command:
```Docker
docker-compose up
```

## License

MIT

---

> [fenko.ga](https://fenko.ga) &nbsp;&middot;&nbsp;
> GitHub [@eugenefenko](https://github.com/eugenefenko) &nbsp;&middot;&nbsp;
> LinkedIn [@eugenefenko](https://www.linkedin.com/in/eugene-fenko-a969b898/)