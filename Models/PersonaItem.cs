using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class PersonaItem
    {
         
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("identificacion")]
        public string Identificacion { get; set; }
        
        [JsonProperty("nombre")]
        public string Nombre { get; set; }
        [JsonProperty("apellido")]
        public string Apellido { get; set; }
        [JsonProperty("telefono")]
        public string Telefono { get; set; }
        [JsonProperty("direccion")]
        public string Direccion { get; set; }
        [JsonProperty("apodo")]
        public string Apodo { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("password")]
        public string Password { get; set; }
        [JsonProperty("tipo")]
        public string Tipo { get; set; }
    }
}