using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TaskSharpHTTP.Models
{
    public class RolItem
    {
        [Key] [JsonProperty("id")] [Column("ID_ROL")]
        public int Id { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE")]
        public string Nombre { get; set; }
        [JsonProperty("permiso_compra")][Column("PERMISO_COMPRA")]
        public string Permiso_compra { get; set; }
        [JsonProperty("permiso_venta")][Column("PERMISO_VENTA")]
        public string Permiso_venta { get; set; }
        [JsonProperty("gestion_usuarios")][Column("GESTION_USUARIOS")]
        public string Gestion_usuarios { get; set; }
    }
}
