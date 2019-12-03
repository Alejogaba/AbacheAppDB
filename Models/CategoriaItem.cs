using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class CategoriaItem
    {
        [Key][JsonProperty("id")][Column("ID_CATEGORIA")]
        public int Id_categoria { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE")]
        public string Nombre { get; set; }
        [JsonIgnore]
        public ICollection<ProductItem> ProductItems { get; set; }
         [JsonIgnore]
        public ICollection<EtiquetaItem> EtiquetaItems { get; set; }
    }
}