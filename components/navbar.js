export default {
    template: 
    `
    <nav class="navbar navbar-expand sticky-top navbar-dark py-4" style="background-color: #403D39">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mr-auto flex-fill">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html"><i class="bi bi-house-fill"></i> Garion Cox</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/projects/Garion Cox Resume.pdf" target="_blank">PDF Resume</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Portfolio
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/projects/tensorflow-cocossd-project/cocossdDescription.html">COCOSSD
                                    Demo</a></li>
                            <li><a class="dropdown-item" href="/projects/MarsRoverProject/marsDescription.html">Mars Rover
                                    Demo</a></li>
                            <li><a class="dropdown-item" href="/projects/nn-library/nn-library-index.html">NN Library</a>
                            </li>
                            <li><a class="dropdown-item" href="/projects/weatherReport(vue)/weatherDescription.html">Weather
                                    API</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>

        <i class="bi bi-lightbulb-off mx-3" id="theme-toggle"></i>
    </nav>
    `
}