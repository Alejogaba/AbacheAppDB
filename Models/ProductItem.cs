using Newtonsoft.Json;
using System.Text;

namespace TaskSharpHTTP.Models
{
    public class ProductItem
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("titulo")]
        public string Titulo { get; set; }
         [JsonProperty("descripcion")]
        public string Descripcion { get; set; }
         [JsonProperty("tipo")]
        public string Tipo { get; set; }
         [JsonProperty("precio")]
        public int Precio { get; set; }
        [JsonProperty("imagen")]
        public string Imagen { get; set; }
         [JsonProperty("categoria")]
        public string Categoria { get; set; }
         [JsonProperty("subgrupo")]
        public string Subgrupo { get; set; }
        
    }
}