<template>
  <div class="home">
    <section>
      <b-container>
        <b-row align-h="center">
          <b-col md="6">
            <div class="box">
              <img class="img-64" src="../assets/Spotify.png" alt="" />
              <h2>Spotify Family</h2>
              <p>
                Grupo destinado a pessoas que querem ver o melhor conteúdo do
                Spotify em alta resolução a um preço acessível.
              </p>
              <button class="grey-button">Customizado</button>

              <b-row>
                <b-col class="border-right">
                  <h1>2/5</h1>
                  <p>vagas disponiveis</p>
                </b-col>

                <b-col class="border-right">
                  <h1>7,90</h1>
                  <p>por mês</p>
                </b-col>

                <b-col>
                  <img src="../assets/link.png" alt="" />
                  <p>Acesso por convite</p>
                </b-col>
              </b-row>
            </div>

            <div class="box">
              <h2>Administrador</h2>
              <hr />

              <img src="../assets/joao_xl.png" alt="" />
              <p>João das Couves</p>

              <div>
                <img src="../assets/Trophy.png" alt="" />
                <img src="../assets/Trophy.png" alt="" />
                <img src="../assets/Trophy.png" alt="" />
              </div>
              <p>selos disponíveis</p>
            </div>

            <div class="box about">
              <h2>Sobre o grupo</h2>
              <a href="#" class="icon-button"
                ><img src="../assets/plus.png" alt=""
              /></a>
            </div>

            <div class="box">
              <h2>Quem já faz parte?</h2>
              <hr />

              <div class="flex">
                <div class="flex-item">
                  <img src="../assets/Maria.png" class="img-48"/>
                    <p>Maria</p>
                </div>

                <div class="flex-item">
                  <img src="../assets/Filipe.png" class="img-48"/>
                    <p>Filipe</p>
                </div>

                <div class="flex-item">
                  <img src="../assets/Ana.png" class="img-48"/>
                    <p>Ana</p>
                </div>
              </div>
            </div>

            <div class="box">
              <h2>Dúvidas frequentes</h2>
              <hr />

              <b-card no-body class="collapse-faq">
                <b-card-header header-tag="header" class="p-1 collapse-faq" role="tab">
                  <b-row align-h="between" block v-b-toggle.accordion-1 variant="info">
                    <b-col cols="6">
                      <p>Quais as formas de pagamento?</p>
                    </b-col>

                    <b-col cols="4">
                      <a href="#" class="icon-button"
                        ><img src="../assets/arrow_back.png" alt="botão voltar"
                      /></a>
                    </b-col>
                  </b-row>
                </b-card-header>

                <b-collapse
                  id="accordion-1" visibleaccordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolore nihil eius voluptates error eveniet ipsam aliquid
                      culpa ad suscipit ea esse cupiditate, corporis porro et
                      quo ut earum ab repellendus.
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <hr />

              <b-card no-body class="collapse-faq">
                <b-card-header header-tag="header" class="p-1 collapse-faq" role="tab">
                  <b-row align-h="between" block v-b-toggle.accordion-2 variant="info">
                    <b-col cols="6">
                      <p>O que é caução?</p>
                    </b-col>

                    <b-col cols="4">
                      <a href="#" class="icon-button"
                        ><img src="../assets/arrow_back.png" alt="botão voltar"
                      /></a>
                    </b-col>
                  </b-row>
                </b-card-header>

                <b-collapse
                  id="accordion-2" visibleaccordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolore nihil eius voluptates error eveniet ipsam aliquid
                      culpa ad suscipit ea esse cupiditate, corporis porro et
                      quo ut earum ab repellendus.
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <hr />

              <b-card no-body class="collapse-faq">
                <b-card-header header-tag="header" class="p-1 collapse-faq" role="tab">
                  <b-row align-h="between" block v-b-toggle.accordion-3 variant="info">
                    <b-col cols="6">
                      <p>Quando terei acesso ao serviço?</p>
                    </b-col>

                    <b-col cols="4">
                      <a href="#" class="icon-button"
                        ><img src="../assets/arrow_back.png" alt="botão voltar"
                      /></a>
                    </b-col>
                  </b-row>
                </b-card-header>

                <b-collapse
                  id="accordion-3" visibleaccordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolore nihil eius voluptates error eveniet ipsam aliquid
                      culpa ad suscipit ea esse cupiditate, corporis porro et
                      quo ut earum ab repellendus.
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <hr />

              <b-card no-body class="collapse-faq">
                <b-card-header header-tag="header" class="p-1 collapse-faq" role="tab">
                  <b-row align-h="between" block v-b-toggle.accordion-4 variant="info">
                    <b-col cols="6">
                      <p>Políticas de cancelamento</p>
                    </b-col>

                    <b-col cols="4">
                      <a href="#" class="icon-button"
                        ><img src="../assets/arrow_back.png" alt="botão voltar"
                      /></a>
                    </b-col>
                  </b-row>
                </b-card-header>

                <b-collapse
                  id="accordion-4" visibleaccordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolore nihil eius voluptates error eveniet ipsam aliquid
                      culpa ad suscipit ea esse cupiditate, corporis porro et
                      quo ut earum ab repellendus.
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

          <carousel></carousel>
          </b-col>

          <b-col md="6">
            <join-group></join-group>
          </b-col>
        </b-row>

        <!-- Responsive fixed bottom card -->
        <div class="box fixed d-only-mobile">
          <b-row>
            <b-col>
              <div class="flex">
                <h3>R$15,90</h3><p>/mês</p>
              </div>
              <p class="green-text">Ver todos os valores</p>
            </b-col>

            <b-col>
              <button class="blue-button">Participar</button>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import joinGroup from "../components/joinGroup.vue";
import carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {
    joinGroup,
    carousel,
  },
};
</script>
