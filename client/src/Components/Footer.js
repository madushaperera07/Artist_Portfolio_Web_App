import React from 'react'

function Footer() {
    return (
        <div>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top">
                    <div class="col-md-4 d-flex align-items-center footer_left">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        </a>
                        <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex footer_right">
                        <li class="ms-3"><i class="bi bi-facebook"></i></li>
                        <li class="ms-3"><i class="bi bi-instagram"></i></li>
                        <li class="ms-3"><i class="bi bi-twitter"></i></li>
                        
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer