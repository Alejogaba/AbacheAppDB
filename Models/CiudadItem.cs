using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TaskSharpHTTP.Models
{
     [Table("CIUDADITEM")]
    public class CiudadItem
    {
        [Key][JsonProperty("id")][Column("ID_CIUDAD")]
        public int Id_ciudad { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE",TypeName="VARCHAR2(10)")]
        public string Nombre { get; set; }
       [JsonProperty("id_departamento")][Column("ID_DEPARTAMENTO")]
        public int Id_departamento { get; set; }
         [JsonIgnore]
        public DepartamentoItem departamentoItem { get; set; }
         [JsonIgnore]
        public ICollection<PersonaItem> PersonaItems { get; set; }
    }
}
