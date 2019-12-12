using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TaskSharpHTTP.Models
{
     [Table("DEPARTAMENTOITEM")]
    public class DepartamentoItem
    {
        [Key][JsonProperty("id")][Column("ID_DEPARTAMENTO")]
        public int Id_departamento { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE",TypeName="VARCHAR2(10)")]
        public string Nombre { get; set; }
         [JsonIgnore]
        public ICollection<PersonaItem> PersonaItems { get; set; }
         [JsonIgnore]
        public ICollection<CiudadItem> CiudadItems { get; set; }
    }
}
