import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification-Portfolio", // Overrides the global title template
};
function Certification() {
  return (
    <>
      <div className="container d-flex flex-column min-vh-100 mt-3">
        <h1>My Certification</h1>
        {/* <p>Learn more Skills me and my background.</p> */}
        <div className="container article p-4 mb-4 rounded-5 bg-primary-subtle">
          <div id="carouselExampleCaptions" className="carousel slide m-lg-3 carousel-fade m-sm-1">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 13"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczOXX6XJCW5P3-9Utt88mJ_4-Sf_gVNTGL1uO1o1VUwHSFNp67VQFKtcs1BEMruWSTYvt9PLW-3hUZVU1TxHg_3pU6DCy3giUVNvP0X7R0lxU3V7UxdTNKV5oz3B2Ey4lWch9hep7wuhGcQcuGUh8hFYqA=w1330-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>1 slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczOgNYMnJRZYwOZ_zmPV2qGrjcon6YhnKUIreOgU4DjjTtonl3bx2icqaLMEpXk6bBNiihN3ptEsa0bg2BaMN_WXR4Zs7eY_mjloXjZiuHFK-V86gKZtKc8ryFa8fKPBdbVkGLj0z4uygsKMN-fRstRibw=w1453-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>2 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczNK2SLM6jxEoGgU4j3zuB36jTVCoylJZWTNbkEjYnqtXs3YhQnZjtGjCD1H5J2JhTOoXyoWxm63OeZZe4qFhB_twXTJfL6d_FN9jNeQ8S90ECg-tVv91CJBBsp9DLXoCNcuy2QlL5VPQiDvOBcZSMV3jw=w1381-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>3 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczNOBQfwRGDK1RT4EQ-UBGtHLAK5A3q-AT4RH9a31SGVDk6_STgIHFtIvWCb72xW-9WPv5EQRyxF1ClXh6YjfvBzsNyqblmidKiCKMvcPzpriIom7kxZsid9c9zN2U38DfY2WUGfBQoiB-ttw1zEMmzNwg=w726-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%", maxHeight: "70vh" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>4 slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPiveKu1SogQ8B5UjCJCHfdbFGk4P_7ap5Y8sssDjQxUVCoFzHDyyI4UMHICF672MWZDRCdg44Xl-yS3MfAYxojbY3eN2swOGgXs3YiT9CQXQ9-840h3n3p2XLWaLgAOdenuAJeLmcgd9LL-3oWuMStPg=w1454-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>5 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczM1hOeK7ez5EvUy0sp9sUl-k6avLrahL28biamYZ1FF_q3EWqvm4rqS6n2tCWiLifHzWLS8T5YcWd-CK5vZFXJhsmb1z6XZZtrPCCSij6s5qevzl6AacY1wxjLlccuvsB9rQmGVPmwq74P-nHYjCcEVNA=w1454-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>6 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczNGzOLm4VgW9qvq705ydwu9PzvnGIEng4XI6tOGtKM2LcCQma05faTPCGTWjbPVRSVNs0QPmtp4nOlJpZR1SI-4GxqaPlsKQlQs0NaooL0MEJAlShv5g9eu3wXJF9rBTtFBIcF3D_1gmtXiFv3lFR9JHg=w1370-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>7 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczOwofseRR7ZSNhUK7EayIfafU3B4JVi-s5LjuTgKVdhs7EdBcHnWQ3WW6_adF_VIgWI7WvBI1sYkIuo1eOvo8sxyN_ZFKb1HOsoryhU55UCfZGPegzX-izef7-RdVmnQhUDSUmH_cFxvHoIOI2QkLrzfg=w1100-h850-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>8 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczMyKi7PlGSey0y3wvsmW2KXPcv73847u1367yZIL2RcAv9NSGmFzBGr2rzeWFwAiQi-IO-DRKkJ_Kmyd8G6aXRJ7LMuJ2ieQ-b-hRBGpdGd-K3_hji4O9MZ_gc1PDKmCRI8R0Q23pFISyZGnnShVrYkjw=w1453-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>9 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczONLVDOrkdqeKF7oZ6v0mhvl7QewP6wU4FSZJP4X_nT5aH_Um_7ISGZm1L0rarpE_9PVjxG4ZcYC37uMtKNw7gPpwrfHGt0t71jxb_9hGM1v8ZAN_OLCFDh5qrT2983NZds9hT4PbEQI4gVFQOVe0xOVg=w997-h755-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>10 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczNmL21gvlI3h1-xawNQBH1c-BNNKoKyYUuAkZ-c3-ip5msyBXbQnwIrXQEY-4anqdP_PwaULhef4yYwrGRTK7J272SchO7IXuz3yS0VZKP9l3lRLdcjbyFEGPBIKYc3FBQ4nwDfASS-f4flr_lecbJ6PA=w1064-h814-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>11 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPFUODdF6DqDiQwf18lIwgjic2aGCYRdYokQGQLZ5IcUa9rTk4XRqtflg8V7HrS5ImxAIsIvs76tzZQHSAPA8VT4TALsvVHMEeAVIDX6Jyyni8FX1wv3YX54k5eBxtbyPmg4rjcrs1c7qdIlkp0UYg6_g=w1065-h816-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>12 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczN-USkqqdLpxHkzzkU627tNw4RHxxoduRTwfQIHa2oDBWEyrksfUoW2LY0-VaRke-btBvBmofQp1Q2PEL5GNgyeKQwlNP6wB2Q393GkUWp5fTe52dkYsjVQWv5-GQ8Z3rfGO884XtV31LgbKE8ELIGl5A=w1456-h1028-s-no-gm?authuser=0"
                  className="d-block w-100 mx-auto"
                  style={{ maxWidth: "90%" }}
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>13 slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <a className="icon-link icon-link-hover" href="https://photos.app.goo.gl/1AE4ULmKr1PqstzQ8">
            All Certification
            <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Certification;

