using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
     [Table("FACTURAITEM")]
    public class FacturaItem
    {
        [Key][JsonProperty("id")][Column("ID_FACTURA")]
        public int Id_factura { get; set; }
        [JsonProperty("id_persona")][Column("ID_PERSONA")]
        public int Id_persona { get; set; }
        [JsonIgnore]
        public PersonaItem PersonaItem { get; set; }
        [JsonProperty("fecha")][Column("FECHA")]
        public DateTime fecha { get; set; }
        [JsonProperty("nombre_persona")][Column("NOMBRE_PERSONA")]
        public string Nombre { get; set; }
        [JsonProperty("apellido_persona")][Column("APELLIDO_PERSONA")]
        public string Apellido { get; set; }
        [JsonProperty("telefono")][Column("TELEFONO")]
        public string Telefono { get; set; }
       [JsonProperty("departamento")][Column("DEPARTAMENTO")]
        public string departamento { get; set; }
        [JsonProperty("ciudad")][Column("CIUDAD")]
        public string ciudad { get; set; }
        [JsonProperty("direccion")][Column("DIRECCION")]
        public string Direccion { get; set; }
         [JsonIgnore]
        public ICollection<FacturaDetalleItem> FacturaDetalleItems { get; set; }
    }    
}
