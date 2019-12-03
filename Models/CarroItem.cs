using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    public class CarroItem
    {
        
        [Key][JsonProperty("id")]
        public int Id_carro { get; set; }
        [JsonProperty("id_cliente")]
        public int Id_persona { get; set; }
        [JsonIgnore]
        public PersonaItem PersonaItem { get; set; }
        [JsonProperty("id_producto")]
        public int Id_producto { get; set; }
        [JsonIgnore]
        public ProductItem ProductItem { get; set; }
        [JsonProperty("cantidad")]
        public int Cantidad { get; set; }
        [JsonProperty("total")]
        public int Total { get; set; }
        [JsonProperty("estado")]
        public string Estado { get; set; }
    }
}
