using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class EtiquetaItem
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("id_categoria")]
        public int Id_categoria { get; set; }
        [JsonProperty("nombre")]
        public string Nombre { get; set; }
    }
}