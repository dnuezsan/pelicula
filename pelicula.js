'use strict';
function inicio(){

};

class Pelicula{
   constructor(){
     let paco=new PersonajeBueno('Paco', 5)
     let ana=new PersonajeBueno('Ana',3)
     let morgan=new PersonajeMalo('Morgan',6);
     let narrador=new Narrador('Narrador');
     narrador.habla('En la tierra salvaje y mortal del desierto de Arizona, se encuentra un pequeño y polvoriento pueblo llamado Dustlane. Un lugar casi olvidado por el resto del mundo a punto de ser sacudido por la violencia.');
     paco.habla('¡Hola Ana! Que día tan espléndido');
     ana.habla('Hola Paco. Eso parece');
     narrador.habla('Mientra ella respondía una nube del polvo se acercaba por el horizonte. Minutos después una siniestra figura a lomos de un caballo negro se detiene en la plaza');
     morgan.habla('GRRR... Menudo estercolero (escupe). No creo que haya nada interesante aquí');
     narrador.habla('De repende Morgan repara en la joven de melena dorada que cargaba las alforjas sobre una yegua. Su altiva mirada manifestaba que estaba dispuesto a conseguir lo que quería a cualquier precio.');
     morgan.habla('¿Qué hace una flor tan fragante como tú en este sitio de mala muerte?');
     narrador.habla('Ella, rápida de reflejos se apartó rápidamente del trayecto de la mano de aquel hombre de mirada cruel y cara surcada de vetas y sudor');
     paco.habla('Creo que la señorita no desea su compañía, y usted parece muy desagradado por nuestro pequeño pueblo así que lo mejor será que se vaya')
     morgan.habla('¡Yo decidiré cuándo me voy mequetrefe! (baja de su montura)');
     ana.habla('Déjalo Paco puedo apañármelas sola');
     morgan.habla('JAJAJA una chica con carácter. Ya lo has visto mequetrefe, ¡lárgate de aquí!');
     paco.habla('No voy a dejarla a manos de una escoria como tú');
     morgan.habla('JAJAJA GRRRR... (escupe). Soy una escoria');
     morgan.dispara();
     paco.habla('AAAHH')
     narrador.habla('Morgan desenfunda su revolver a la velocidad del rayo, pero Ana, más rápida aún de reflejos y pensamiento lanza las alforjas sobre él y logra desequilibrarlo desviando el tiro convirtiendo un disparo mortal en un tiro en el hombro');
     morgan.habla('¡Ramera, ahora si que voy a darte lo que mereces!');
     paco.dispara();
     morgan.habla('!Mi oreja; desgraciados!');
     narrador.habla('Rojo y con la mirada desencajada por la ira Morgan comienza a disparar a Paco que se ve obligado a retroceder y cubrirse tras el abrevadero, mientras que Ana entra corriendo en el viejo salón');
     morgan.dispara();
     paco.dispara();
     narrador.habla('Paco intenta defenderse disparando a ciegas para no exponerse mientras Morgan gana terreno');
     paco.dispara();
     morgan.dispara();
     paco.dispara();
     morgan.habla('¿Qué pasa mequetrefe? ¿Te ha comido la lengua el gato?')
     paco.habla('Tengo un par de cosas qque decirte pero dudo que me oigas');
     narrador.habla('Las palabras de Paco redoblaron la furia de Morgan');
     morgan.dispara();
     paco.dispara();
     morgan.dispara();
     paco.dispara();
     narrador.habla('Sin balas ni esperanza, Paco se puso en pie para mirar a aquel tipo a la cara. No moriría escondido, sino de pie y desafiante');
     morgan.habla('Se te acabó la suerte. Lástima que la muñequita no esté aquí pero tranquilo, después de que me divierta haré que se reuna contigo');
     ana.dispara();
     narrador.habla('El estruendo ensordecedor del winchester puede a muchas millas pero no es reconocible para cualquier oído. Sin embargo, el agujero en el vientre de Morgan no daba lugar a dudas');
     morgan.habla('Tú fulana GRRR... AHHH.');
     ana.dispara();
     ana.habla('debiste haberte marchado cuando pudiste');
     narrador.habla('Morgan se arrastra por el suelo hacia un poste dejando un rastro de sangre');
     morgan.habla('¿Crees que esto va a quedar así? Mis chicos vendrán, acabrán con vosotros y quemarán este pueblucho');
     ana.habla('Así tardaré menos en cobrar por sus cabezas');
     narrador.habla('Ana arroja un manojo de papeles a Morgan entre los que reconoce a sus compañeros y a sí mismo');
     morgan.habla('JAJAJA...(tose) ¿quién lo hubiera dicho? una chiquilla como tu...');
     ana.dispara();
     paco.habla('Gracias, ¿Qué vas a hacer ahora?');
     ana.habla('Terminar el trabajo');
     narrador.habla('Ana monta en su caballo y cablga hacia el ocaso, donde brilla el fuego de la venganza y desde lo alto puede oirse la canción de otra historia (suena ectasy of gold).');

   }

}
//fragmentos de codigo de atajo
    /*
    narrador.habla('');
    morgan.habla('')
     ana.habla('');
     paco.habla('');
     */

class Narrador{
    constructor(nombre){
      this.nombre=nombre;
    }
    habla(texto){
      document.write(`<p id=narrador><b>${this.nombre}</b>: ${texto}</p>`);
    }
}

class Personaje{

    constructor(nombre,balas){
      this.nombre=nombre;
      this.balas=balas;
    }
    //dispara y cada vez que se ejecuta, se gasta una bala
    dispara(){
      this.balas=--this.balas;
        if (this.balas<0) {
            document.write('<p>¡CLICK!</p>');
        } else {
            document.write('<p>¡PUM!</p>');
        }
    }

    habla(texto){
      document.write(`<p id=${this.nombre}><b>${this.nombre}</b>: ${texto}</p>`);
    }

    //Si se dispara a un personaje este podría recibir una herida aleatoriamente
    herida(){
      let numeroAzar=Math.ceil((Math.random()*9)+0.5);
      console.log(numeroAzar);
      if (numeroAzar<6) {
        document.write('<p>¡Ay!</p>');
      }
    }
}

class PersonajeBueno extends Personaje{
    constructor(nombre,balas){
      super(nombre,balas);
    }

}

class PersonajeMalo extends Personaje{
    constructor(nombre, balas){
        super(nombre,balas)
    }

}

let ha=new Pelicula();
