using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskSharpHTTP.Models
{
    public class EtiquetaItem
    {
        [Key][JsonProperty("id")][Column("ID_ETIQUETA")]
        public int Id_etiqueta { get; set; }
       [JsonProperty("id_categoria")][Column("ID_CATEGORIA")]
        public int Id_categoria { get; set; }
         [JsonIgnore]
        public CategoriaItem categoriaItem { get; set; }
        
        [JsonProperty("nombre")][Column("NOMBRE")]
        public string Nombre { get; set; }
    }
}