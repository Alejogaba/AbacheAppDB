using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TaskSharpHTTP.Models
{
    public class CiudadItem
    {
        [Key][JsonProperty("id")][Column("ID_CIUDAD")]
        public int Id { get; set; }
        [JsonProperty("nombre")][Column("NOMBRE")]
        public string Nombre { get; set; }
        [ForeignKey("ID_DEPARTAMENTO")][JsonProperty("id_departamento")][Column("ID_DEPARTAMENTO")]
        public virtual DepartamentoItem Id_departamento { get; set; }
    }
}
