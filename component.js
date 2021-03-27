class nikeCard extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: 'open'})

        // this.title = this.getAttribute('title')
        // this.category = this.getAttribute('category')
        // this.feature = this.getAttribute('feature')
        // this.price = this.getAttribute('price')
        // this.img = this.getAttribute('img')
    }
    static get observedAttributes(){
        return ["title", "feature", "price", "img", "category"];
    }
    attributeChangedCallback(attribute, oldValue, newValue){
        if(attribute === "title" && oldValue !== newValue){
            this.title = newValue;
        }
        if(attribute === "feature" && oldValue !== newValue){
            this.feature = newValue;
        }
        if(attribute === "price" && oldValue !== newValue){
            this.price = newValue;
        }
        if(attribute === "img" && oldValue !== newValue){
            this.img = newValue;
        }
        if(attribute === "category" && oldValue !== newValue){
            this.category = newValue;
        }
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
            <div class="container">
                <div class="left">
                    <img src="${this.img}" />
                </div>
                <div class="right">
                    <h2>${this.title}<small> ${this.category}</small></h2>
                    <p>${this.feature}</p>
                    <span>${this.price}</span>
                    <button>Buy Now</button>
                </div>
            </div>
            ${this.getStyles()}
        `
        return template;
    }
    getStyles(){
        return `
        <style>
            :host {
                --marginCard: 10px;
                --widthCard: 500px;
                --widthButton: 100%;
                --heightButton: fit-content;
                --heightCard: 278px;
                --backColor: black;
                --colorCircle: cyan;
                --colorButton: cyan;
                --colorTitle: white;
                --colorCategory: grey;
                --colorFeature: grey;
                --colorPrice: white;
                --borderCard: solid 1px grey;
                --fontTitle: Arial, Helvetica, sans-serif;
                --fontCategory: Arial, Helvetica, sans-serif;
                --fontFeature: Arial, Helvetica, sans-serif;
                --fontPrice: Arial, Helvetica, sans-serif;
                --fontSizeButton: 14px;
                --marginRightButton: 0;
                --sizeFeature: 15px;
                --sizePrice: 16px;
                --containerGridTemplate: 1fr / 55% 45%;
                --containerTemplateAreas: "imagen info";
                --backImgRadius: 0 50% 50% 0;
                --imgPositionLeft: -20px;
                --imgPositionTop: 50px;
                --imgWidth: 300px;
                --hoverCircleRadius: 50%;
                --hoverCircleMargin: 5px -10px 13px 15px;
            
            }
            .container {
                display: grid;
                grid-template: var(--containerGridTemplate);
                grid-template-areas: var(--containerTemplateAreas);
                border: var(--borderCard);
                border-radius: 7px;
                width: var(--widthCard);
                height: var(--heightCard);
                margin: var(--marginCard);
                position: relative;
                background: var(--backColor);            
            }

            .left {
                grid-area: imagen;
                background: var(--colorCircle);
                border-radius: var(--backImgRadius);
                transition: 350ms;
                margin-right: -10px;
            }

            .container:hover .left {
                border-radius: var(--hoverCircleRadius);
                margin: var(--hoverCircleMargin);
            }
            
            .container:hover img {
                transform: scale(1.1)
            }

            .right {
                grid-area: info;
                display: grid;
                grid-template: 20% 55% 1fr / 1fr;
                grid-template-areas: "title title"
                                     "feature feature"
                                     "price button";
                padding-left: 20px;
                padding-right: 15px;
            }

            h2 {
                grid-area: title;
                align-items: center;
                font-size: 30px;
                color: var(--colorTitle);
                font-family: var(--fontTitle);
            }
            small {
                font-size: 10px;
                color: grey;
                font-weight: lighter;
                color: var(--colorCategory);
                font-family: var(--fontCategory);
            }
            p{
                grid-area: feature;
                align-items: center;
                font-size: var(--sizeFeature);
                font-family: var(--fontFeature);
                text-align: center;
                color: var(--colorFeature);
            }
            span{
                grid-area: price;
                justify-content: center;
                font-size: var(--sizePrice);
                padding: 10px 0 0 5px;
                font-weight: bold;
                height: fit-content;
                color: var(--colorPrice);
                font-family: var(--fontPrice);
            }
            button{
                grid-area: button;
                align-items: center;
                padding: 10px;
                width: var(--widthButton);
                height: var(--heightButton);
                background: var(--colorButton);
                border: none;
                margin-right: var(--marginRightButton);
                border-radius: 7px;
                color: var(--backColor);
                font-size: var(--fontSizeButton);
                font-weight: bold;
                outline: none;
            }

            img {   
                position: absolute;
                left: var(--imgPositionLeft);
                top: var(--imgPositionTop);
                width: var(--imgWidth);
                transform: rotate(-20deg);
                transition: 350ms;
            }

            @media (max-width: 600px) {
                .container {
                    grid-template: 200px 1fr / 310px;
                    grid-template-areas:  "imagen"
                                          "info";
                    width: 320px;
                    height: fit-content;
                    margin: 30px auto;
                }

                img {   
                    left: -15px;
                    top: -30px;
                    width: 320px;
                }

                .left {
                    border-radius: 0 0 50% 50%;
                }
                p{
                    font-size: 18px;
                }
                span{
                    font-size: 22px;
                }
                button{
                    width: 100px;
                    height: 50px;
                    margin-right: 5px;
                    font-size: 16px;
                }
            }
           

        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('nike-card', nikeCard)