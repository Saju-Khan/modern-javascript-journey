var Dada = {
    borodada: "Name",
    sone: ["Islam", "Sufia", "Dainul", "Romjan", "Belal", "Roshida", "Shohorap"],
    PrintLibrary: function () {
        this.sone.forEach((s) => console.log(`${this.borodada} Child ${s}`));
    }
};
Dada.PrintLibrary();