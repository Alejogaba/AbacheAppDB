using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace TaskSharpHTTP.Models
{
     [Table("MENSAJEITEM")]
    public class MensajeItem
    {
        
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("cliente")]
        public string Cliente { get; set; }
         [JsonProperty("mensaje")]
         public string Mensaje { get; set; }
        [JsonProperty("vendedor")]
        public string Vendedor { get; set; }
        [JsonProperty("fecha")]
        public DateTime fecha { get; set; }
        [JsonProperty("enviado_por")]
        public string Enviado_por { get; set; }
    }
}
