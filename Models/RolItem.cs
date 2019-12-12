using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TaskSharpHTTP.Models
{
    [Table("ROLITEM")]
    public class RolItem
    {
        [Key][JsonProperty("id")] [Column("ID_ROL")]
        public int Id_rol { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE")]
        public string Nombre { get; set; }
         [JsonIgnore]
        public ICollection<PersonaItem> PersonaItems { get; set; }
    }
}
