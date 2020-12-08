        // public int moda()
        // {
        //     int[] original = new int[] { 2, 3, 4, 7, 8, 3,1,1,1,1 ,2, 5, 6, 7, 2};

        //     int moda = 0;
        //     int mayor = 0;

        //     for (int i = 0; i < original.Length; i++)
        //     {
        //         int contador = 0;
        //         for (int i2 = 0; i2 < original.Length; i2++)
        //         {
        //             if (original[i] == original[i2])
        //             {
        //                 contador++;
        //             }
        //         }

        //         if (contador > mayor)
        //         {
        //             mayor = contador;
        //             moda = original[i];
        //         }
        //     }
function myfuncionMediana(){
        let conjunto = [ 2, 3, 4, 7, 8, 3, 1, 1, 1, 1, 2, 5, 6, 7, 2] ;
        let media = 0;
        let  acumulador = 0;
        for (let i = 0; i < conjunto.length; i++)
        {
            let random1;
            acumulador = acumulador + conjunto[i];
        }
        media = acumulador / conjunto.Length;
        alert(media);
}

        // CODIGO MEDIANA
function myfuncionMedia(){
        let conjunto = [ 2, 3, 4, 7, 8, 3, 1, 1, 1, 1, 2, 5, 6, 7] ;
        let conjunto = conjunto.sort().reverse();
        if (conjunto.length%2==0) {
            let pos1=conjunto.length/2
            let pos2=pos1-1
            let elem1=v[pos1]
            let elem2=v[pos2]
            let mediana=(elem1+elem2)/2
        } else {
            let pos_central=(v.length-1)/2
            let mediana=v[pos_central]
        }
        alert("La mediana es:"+mediana);
}