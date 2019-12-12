using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
     [Table("CATEGORIAITEM")]
    public class CategoriaItem
    {
        [Key][JsonProperty("id_categoria")][Column("ID_CATEGORIA")]
        public int Id_categoria { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE")]
        public string Nombre { get; set; }
         [JsonIgnore]
        public ICollection<EtiquetaItem> EtiquetaItems { get; set; }
    }
}