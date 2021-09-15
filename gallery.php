<?php 
    include "includes/header.php";
?>
    <section class="section-gallery-intro">
        <header class="header">
            <div class="container u-logo-fill">
                <?php 
                    (include "includes/navigation.php")
                ?>
            </div>
        </header>
    </section>
    <section class="gallery-intro">
        <div class="container h-100">
            <div class="gallery-intro__wrapper">
                <div class="gallery-intro__box">
                    <h1 class="gallery-intro__header">
                        Gallery
                    </h1>
                    <p class="gallery-intro__paragraph">
                        We build great business
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="section-gallery">
        <div class="gallery">
            <div class="gallery__box gallery__box--1">
                <img src="assets/images/gallery--1.png" alt="gallery 1" class="gallery__image">
            </div>
            <div class="gallery-box gallery__box--2">
                <img src="assets/images/gallery--2.png" alt="gallery 2" class="gallery__image">
            </div>
            <div class="gallery-box gallery__box--3">
                <img src="assets/images/gallery--3.png" alt="gallery 3" class="gallery__image">
            </div>
            <div class="gallery-box gallery__box--4">
                <img src="assets/images/gallery--4.png" alt="gallery 4" class="gallery__image">
            </div>
            <div class="gallery-box gallery__box--5">
                <img src="assets/images/gallery--5.png" alt="gallery 5" class="gallery__image">
            </div>
        </div>
    </section>
<?php
    include "includes/testimonial.php";
    include "includes/newsletter.php";
    include "includes/footer.php";
?>