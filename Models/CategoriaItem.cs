using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class CategoriaItem
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("nombre")]
        public string Nombre { get; set; }
        [JsonProperty("imagen")]
        public string Imagen { get; set; }
    }
}