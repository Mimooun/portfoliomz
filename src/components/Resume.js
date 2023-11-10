import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);
  return (
    <div className="aali_tm_section" id="resume">
      <div className="aali_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                <span>Savoir plus</span>
                <h3>Mon CV</h3>
                <p>
                  J'apprécie chaque étape du processus de conception, de la discussion et
                  collaboration à la conception et à l'exécution
                </p>
              </div>
              <div className="content_inner">
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">

                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Formation Développement web</h3>
                              <span>Le Wagon</span>
                            </div>
                            <div className="right">
                              <span>2023 - 2024</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Certificat de qualification professionnelle inscrit au Répertoire national des certifications professionnelles (RNCP).
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Ingénierie Informatique</h3>
                              <span>Sup MtI</span>
                            </div>
                            <div className="right">
                              <span>2020 - 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Ingénieur spécialisé dans le développement du système informatique
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Licence professionnelle</h3>
                              <span>Sup MtI</span>
                            </div>
                            <div className="right">
                              <span>2020 - 2021</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Licence des systèmes informatiques
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Technicien spécialisé en développement multimédia</h3>
                              <span>CFMNTIOE</span>
                            </div>
                            <div className="right">
                              <span>2017 - 2019</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Formation technician specialist en développement multimedia a etablissement CFMNTIOE
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Baccalauréat</h3>
                              <span>Abdelmoumen Lycée</span>
                            </div>
                            <div className="right">
                              <span>2016 - 2017</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Science physique
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="wow fadeInRight" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                    <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Projet Fin de formation</h3>
                              <span>Le Wagon</span>
                            </div>
                            <div className="right">
                              <span>2022 - 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Conception et réalisation d’une application de recommandation de livres basée sur l'humeur et les préférences.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Projet Fin D'etude</h3>
                              <span>Sup Mti</span>
                            </div>
                            <div className="right">
                              <span>2022 - 2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Conception et réalisation d’une application
                              parentale pour le suivi en temps réel du transport scolaire NAVI school
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Projet Fin D'année </h3>
                              <span>Sup Mti</span>
                            </div>
                            <div className="right">
                              <span>2021 - 2022</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Application pour un fournisseur de produits pharmaceutiques
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Entreprise SYMPANUX </h3>
                              <span>SYMPANUX</span>
                            </div>
                            <div className="right">
                              <span>2020-2021</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Durant le stage dans l' entreprise SYMPANUX j'ai les a réaliser un site web qui facilite la pré-inscription aux formations
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Societe TECHNOLOGICA </h3>
                              <span>TECHNOLOGICA</span>
                            </div>
                            <div className="right">
                              <span>2017 - 2018</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Dans la société TECHNOLOGICA on a créé une application qui peut gérer toute les interventions et des Pannes des appareils multimédia des clients
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="media" data-background-style="video">
          {" "}
          {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
          {/* <div
            className="video jarallax"
            data-speed={0}
            data-jarallax-video="https://vimeo.com/337293658"
          /> */}
          <div
            className="image jarallax"
            data-speed={0}
            data-img-url="img/about/2.jpg"
          />
          <span
            className="square moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
