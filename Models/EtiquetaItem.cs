using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskSharpHTTP.Models
{
    public class EtiquetaItem
    {
        [Key][JsonProperty("id")][Column("ID_ETIQUETA")]
        public int Id { get; set; }
        [ForeignKey("ID_CATEGORIA")][JsonProperty("id_categoria")][Column("ID_CATEGORIA")]
        public virtual CategoriaItem Id_categoria { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE")]
        public string Nombre { get; set; }
    }
}