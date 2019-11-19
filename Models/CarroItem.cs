using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskSharpHTTP.Models
{
    public class CarroItem
    {
        
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("id_cliente")]
        public int Id_cliente { get; set; }
        [JsonProperty("id_producto")]
        public int Id_producto { get; set; }
        [JsonProperty("cantidad")]
        public int Cantidad { get; set; }

    }
}
