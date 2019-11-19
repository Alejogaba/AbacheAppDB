using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class CategoriaItem
    {
        [Key][JsonProperty("id")][Column("ID_CATEGORIA")]
        public int Id { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE")]
        public string Nombre { get; set; }
        [JsonProperty("imagen")][Column("IMAGEN")]
        public byte[] Imagen { get; set; }
    }
}