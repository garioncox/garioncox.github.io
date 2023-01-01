export default {
    template: 
    `
    <nav class="navbar navbar-expand navbar-dark py-4" style="background-color: #403D39">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav m-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html">Garion Cox Resume</a>
                    </li>
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
                            <li><a class="dropdown-item" href="/projects/MarsRoverProject/marsRover.html">Mars Rover
                                    Demo</a></li>
                            <li><a class="dropdown-item" href="/projects/nn-library/nn-library-index.html">NN Library</a>
                            </li>
                            <li><a class="dropdown-item" href="/projects/weatherReport(vue)/weatherReport.html">Weather
                                    API</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>

        <i class="mx-5 bi bi-lightbulb-off" id="theme-toggle"></i>
    </nav>
    `
}