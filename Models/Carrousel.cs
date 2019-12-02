using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskSharpHTTP.Models
{
    public class Carrousel
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("imagen")]
        public byte[] Imagen { get; set; }

    }
}
