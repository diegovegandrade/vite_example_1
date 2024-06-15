<template>
    <!-- <div class="space"></div> -->
    <section class="one">
        <div class="HeroWrapper">
            <div class="HeroContainer">
                <div class="ImageContainer">
                    <div class="HeroFecha">
                        <p>14.09.2024</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="HeroNombres">
            <p>
                ANGIE & DIEGO
            </p>
        </div>
    </section>
    <section class="two">
        <div class="CounterWrapper">
            <div id="counter" class="Counter_DA">
                <p>
                    {{ days }}<br/> <p class="CounterText">DÍAS</p>
                </p>
                <p>
                    {{ hours }}<br/> <p class="CounterText">HRS</p> 
                </p> 
                <p>
                    {{ minutes }}<br/> <p class="CounterText">MIN</p> 
                </p>
                <p>
                    {{ seconds }}<br/> <p class="CounterText">SEG</p> 
                </p>   
            </div>
            <div class="AddCalendar">
                <p>
                    Agrégalo a tu calendario
                </p>
                <div class="OpcionesCalendar">
                    <add-to-calendar-button
                        v-if="isIOS"
                        name="Boda de Angie & Diego"
                        startDate="2024-09-14"
                        endDate="2024-09-14"
                        startTime="15:00"
                        endTime="23:59"
                        description="[h1]Save the date! 🥳[/h1]"
                        timeZone="America/Mexico_City"
                        location="Atlixco, Puebla"
                        options="'Apple','Google'"
                        buttonsList
                        hideTextLabelButton
                        buttonStyle="round"
                        lightMode="bodyScheme"
                    ></add-to-calendar-button>
                    <add-to-calendar-button
                        v-else
                        name="Boda de Angie & Diego"
                        startDate="2024-09-14"
                        endDate="2024-09-14"
                        startTime="15:00"
                        endTime="23:59"
                        description="[h1]Save the date! 🥳[/h1]"
                        timeZone="America/Mexico_City"
                        location="Atlixco, Puebla"
                        options="'Google'"
                        buttonsList
                        hideTextLabelButton
                        buttonStyle="round"
                        lightMode="bodyScheme"
                    ></add-to-calendar-button>
                </div>
            </div>
        </div>
        <div class="WrapperCalendarSection">
            <div class="SeparadorWrapper">
                <div class="SeparadorFlor"></div>
            </div>
            <div class="WrapperTextCalendar">
                <p class="TextCalendar">
                    Una propuesta, un <b>Sí</b> y una decisión que tomamos juntos. Nuestro amor ha crecido, ha madurado y florecido, a veces sencillo, otras caótico pero siempre maravilloso.<br/>
                    Así comienza una nueva etapa en nuestras vidas. Somos aventureros, dedicados, fuertes; los desafíos que hemos enfrentado nos han ayudado a crecer juntos. Y bueno...<br/>
                    <b>¡Nos casamos!</b> Y estamos solicitando <span class="highlight">invitados con o sin experiencia</span>, para ser parte de la celebración de nuestra boda, habrá deliciosa comida, baile y ¡mucha fiesta!
                </p>
            </div>
            <div class="SeparadorWrapper">
                <div class="SeparadorFlor1"></div>
            </div>
        </div>
        <div class="FechaSectionWrapper">
            <div class="FechaSection">
                <div class="FechaHora">
                    <p>
                        Sábado
                    </p>
                    <p class="Separadores">
                        Sep 14 <br/>
                        2024
                    </p>
                    <p>
                        04:00pm
                    </p>
                </div>
                <div class="LugarWrapper">
                    <p class="Lugar">Jardín Valle de los Reyes</p>
                </div>
            </div>
        </div>
    </section>
    <section class="three"> 
        <div class="Direccion">
            <div class="SeparadorPuntoWrapper">
                <div class="SeparadorPunto"></div>
            </div>
            <p class="Lugar_direccion">
                A San Diego SN, San Diego Acapulco, <br/>
                74365 Atlixco, Pue.
            </p>
            <a href="https://maps.app.goo.gl/gacDTVX42UdKNAEW7" target="_blank">
                <button class="VerMapa">ver mapa</button>
            </a>
            <div class="SeparadorPuntoWrapper">
                <div class="SeparadorPunto"></div>
            </div>
        </div>
        <div class="WrapperItinerario">
            <p class="ItinerarioVerde">◆</p>
            <div class="ItinerarioVerde_letters">
                <p>ITINERARIO</p>
            </div>
            <div class="ItinerarioTextWrapper">
                <div class="ItinerarioText">
                    <p class="ItinerarioVerde">4:00 pm</p><p>Recepción</p>
                </div>
                <div class="ItinerarioText">
                    <p class="ItinerarioVerde">5:00 pm</p><p>Ceremonia</p>
                </div>
                <div class="ItinerarioText">
                    <p class="ItinerarioVerde">6:00 pm</p><p>Comedera</p>
                </div>
                <div class="ItinerarioText">
                    <p class="ItinerarioVerde">7:45 pm</p><p>Pasitos de amor</p>
                </div>
            </div>
            <p class="ItinerarioVerde">◆</p>
        </div>
        <div class="MesaRegalosWrapper">
            <div class="MesaRegalos">
                <div class="MesaRegalosSeparadorWrapper">
                    <div class="MesaRegalosSeparador">  </div>
                </div>
                <p class="MesaRegalosTitulo"> MESA DE REGALOS</p>
                <p class="MesaRegalosText">
                    Tu presencia en nuestra boda es el mejor regalo que podríamos recibir. Sin embargo, si deseas hacernos un regalo, apreciamos sinceramente tu generosidad.
                    <br/>
                    <br/>
                    En lugar de una mesa de regalos tradicional, hemos decidido aceptar contribuciones <a class="MoneyLink" href="https://drive.google.com/file/d/1uGmxWCatwjWpJojS2ZqLCsp2jeLD5hiZ/view?usp=sharing" target="_blank">$$$</a> para nuestra Honeymoon.
                </p>
                <div class="SeparadorPuntoWrapper">
                    <div class="SeparadorPunto"></div>
                </div>
            </div>
            </div>
            
    </section>
    <section class="four">
        <div class="fourWrapper">
            <div class="Hospedaje">
                <p class="OpcionesHospedaje">SUGERENCIAS DE HOSPEDAJE</p><br/><br/>
                <a class="HospedajeLink" href="https://www.google.com.mx/maps/place/Caba%C3%B1as+Ederra/@18.8771174,-98.4433468,16z/data=!4m10!3m9!1s0x85cfb3bc8933ce11:0xc452f9b18d8c9877!5m3!1s2024-09-14!4m1!1i2!8m2!3d18.8767842!4d-98.4394901!16s%2Fg%2F11m80747g4?entry=tts&g_ep=EgoyMDI0MDUxNC4wKgBIAVAD" target="_blank">Cabañas Ederra</a><br/><br/>
                <a class="HospedajeLink" href="https://www.google.com.mx/maps/place/La+Esmeralda/@18.878942,-98.4415946,16z/data=!4m10!3m9!1s0x85cfb39bdf15dc63:0xcac2fbebda171487!5m3!1s2024-09-14!4m1!1i2!8m2!3d18.8836021!4d-98.4332199!16s%2Fg%2F12qh4_826?entry=tts&g_ep=EgoyMDI0MDUxNC4wKgBIAVAD" target="_blank">Hotel Esmeralda</a><br/><br/>
                <a class="HospedajeLink" href="https://www.google.com/maps/place/Casa+de+las+flores+hotel+%26+spa/@18.8849408,-98.4305417,17z/data=!3m1!4b1!4m9!3m8!1s0x85cfb3d8d80cb277:0x2cf84fda572e2a92!5m2!4m1!1i2!8m2!3d18.8849408!4d-98.4305417!16s%2Fg%2F11h5990zbt?entry=tts&g_ep=EgoyMDI0MDUxNC4wKgBIAVAD" target="_blank">Casa de las Flores</a><br/><br/>
                <a class="HospedajeLink" href="https://www.google.com/maps/place/Hacienda+Santo+Cristo/@18.889522,-98.4313077,17z/data=!4m10!3m9!1s0x85cfb39acec2e88d:0xaeb8afdebaa68f3c!5m3!1s2024-09-14!4m1!1i2!8m2!3d18.889522!4d-98.4313077!16s%2Fg%2F1pv5y2vwz?entry=ttu" target="_blank">Hacienda Santo Cristo</a><br/><br/><br/><br/><br/><br/>
            </div> 
            <div class="Confirmacion">
                <p class="ConfirmaTitulo">CONFIRMACIÓN</p>
                <div class="ConfirmacionTextWrapper">
                    <p class="ConfirmacionText">
                        Hemos decidido que nuestra celebración será <strong>solo para adultos, sin niños.</strong>
                        Agradecemos tu comprensión y esperamos con ansias celebrar juntos.<br/><br/>
                        Por favor confirma tu asistencia aquí abajo
                    </p>
                </div>
                <div class="FormWrapper">
                    <form class="FormConfirma" @submit.prevent="handleSubmit">
                        <div class="WrapperAll">
                            <div class="InputWrapper">
                                <div class="TuNombre">
                                    <label for="nombreapellido">TU NOMBRE</label>
                                </div>
                                <div class="InputNombreWrapper">
                                    <input 
                                        type="text"
                                        class="InputNombre"
                                        id="nombreapellido"
                                        name="fullName"
                                        v-model="formData.fullName"
                                        placeholder="Nombre y Apellido">
                                </div>
                            </div>
                            
                            <div class="ConfirmaRounded">
                                <div class="WrapperRadio">
                                    <input 
                                        class="InputRadio"
                                        id="si"
                                        type="radio"
                                        name="confirmation"
                                        value="SI"
                                        v-model="formData.confirmation"
                                        @change="handleSiRadioChange">
                                    <label for="si">Sí, asistiré 🤍</label>
                                </div>
                                
                                <div class="WrapperRadio">
                                    <input
                                        class="InputRadio"
                                        id="no"
                                        type="radio"
                                        name="confirmation"
                                        value="NO"
                                        v-model="formData.confirmation"
                                        @change="handleRadioChange">
                                    <label for="no">No podré asistir 😔</label>
                                </div>
                            </div>
                            
                            <div class="InputWrapper">
                                <div class="TuNombre">
                                    <label for="cuantas">¿CUANTAS PERSONAS VAN?</label>
                                </div>
                                <div class="InputNombreWrapper">
                                    <input 
                                        type="number"
                                        class="InputNombre"
                                        id="cuantas"
                                        name="numGuests"
                                        v-model="formData.numGuests"
                                        placeholder="Ingresa el número de Invitados"
                                        :disabled="isNoSelected" 
                                        min="0"
                                        max="7"
                                        @input="validateGuests">
                                </div>
                                <div class="TextoAbajo">
                                    <p>
                                        Confirma el número de asistentes de acuerdo 
                                        al boleto que se te ha proporcionado.
                                    </p>
                                </div>
                            </div>
    
                            <div class="WrapperBtnConfirma">
                                <button class="BtnConfirma" type="submit">enviar</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>  
        </div>
    </section>

    <div class="PopUpWrapper" v-if="showModal">
        <div class="PopUp">
            <div class="PopUpConfirma">
                ¡Gracias por confirmar! Nos vemos pronto😉
            </div>
            <button class="OkCierra" @click="CloseModal">Ok</button>
        </div>
    </div>
 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import 'add-to-calendar-button';


const targetDate = new Date('2024-09-14T16:00:00-06:00');

const currentDate = ref(new Date());
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const isIOS = ref(false);
const isNoSelected = ref(true);
const showModal = ref(false)


const formData = ref({
    fullName: '',
    confirmation: '',
    numGuests: ''
});

const resetForm = () => {
  formData.value.fullName = '';
  formData.value.confirmation = '';
  formData.value.numGuests = '';
  isNoSelected.value = false;
};

const checkIfIOS = () => {
  const userAgent = navigator.userAgent;
  isIOS.value = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};


const handleRadioChange = () => {
  isNoSelected.value = true;
};

const handleSiRadioChange = () => {
  isNoSelected.value = false;
};

const CloseModal = () =>{
    showModal.value = false;
}

const handleSubmit = async () => {

        if(!formData.value.fullName || !formData.value.fullName.trim()) {
            alert('Parece que no has colocado tu nombre, registra tu nombre para continuar ☺️')
        }
        else if(!formData.value.confirmation.trim() ){
            alert('Parece que no has colocado la opción de asistir o no asistir ☺️')
        }
        else if(formData.value.confirmation == 'NO'){
            try {
                const response = await fetch('https://wedding-rsvp-function-diego-vegas-projects-cbca63ac.vercel.app/api/rsvp', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData.value)
                });

                if(response.status == 200){
                    alert('Lamentamos que no puedas asistir 😥, muchas gracias por confirmar.')                                  
                    const data = await response.json();
                    console.log('Form submitted successfully:', data);
                    resetForm();
                }
                else {
                    alert('Oops parece que el server gratis que estamos usando, fallo. Intenta de nuevo porfavor.');
                    throw new Error('Network response was not ok');
                }
                  
            } catch (error) {
                console.error('Error submitting form:', error);
                }
        }
        else if(formData.value.numGuests === null || isNaN(formData.value.numGuests) || formData.value.numGuests <= 0){
            alert('Parece que no has colocado el número de tus invitados, agregalo para poder continuar ☺️')
        }
        else{
            try {
                const requestData = { ...formData.value, numGuests: formData.value.numGuests.toString() };
                const response = await fetch('https://wedding-rsvp-function-diego-vegas-projects-cbca63ac.vercel.app/api/rsvp', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData) });
                                
                if (response.status == 200) {
                    showModal.value = true;
                    const data = await response.json();
                    console.log('Form submitted successfully:', data);
                    resetForm();
                                    
                } 
                else {
                    alert('Oops parece que el server gratis que estamos usando, fallo. Intenta de nuevo porfavor.');
                    throw new Error('Network response was not ok'); 
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                }
        }

};


const validateGuests = (event) => {
  const input = event.target;
  if (input.validity.rangeOverflow) {
    input.setCustomValidity("No te manches, ¿De dónde sacas más de 7 invitados?");
  } else {
    input.setCustomValidity("");
  }
};


const calculateTimeLeft = () => {
  const difference = targetDate - currentDate.value;
  if (difference <= 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  } else {
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((difference / (1000 * 60 * 60)) % 24);
    minutes.value = Math.floor((difference / 1000 / 60) % 60);
    seconds.value = Math.floor((difference / 1000) % 60);
  }
};


onMounted(() => {
  calculateTimeLeft();
  setInterval(() => {
    currentDate.value = new Date();
    calculateTimeLeft();
  }, 1000);
  checkIfIOS();
  
});
</script>
