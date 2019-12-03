using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskSharpHTTP.Models
{
    public class PersonaItem
    {
         
        [Key][JsonProperty("id")][Column("ID_PERSONA")]
        public int Id_persona { get; set; }
        [JsonProperty("imagen")][Column("IMAGEN")]
        public byte[] Imagen { get; set; }
        [JsonProperty("nombre")][Column("NOMBRES")]
        public string Nombre { get; set; }
        [JsonProperty("apellido")][Column("APELLIDOS")]
        public string Apellido { get; set; }
        [JsonProperty("telefono")][Column("TELEFONO")]
        public string Telefono { get; set; }
        [JsonProperty("id_departamento")][Column("ID_DEPARTAMENTO")]
        public int Id_departamento { get; set; }
        [JsonIgnore]
        public DepartamentoItem departamentoItem { get; set; }
        [JsonProperty("id_ciudad")][Column("ID_CIUDAD")]
        public int Id_ciudad { get; set; }
        [JsonIgnore]
        public CiudadItem ciudadItem { get; set; }
        [JsonProperty("direccion")][Column("DIRECCION")]
        public string Direccion { get; set; }
        [JsonProperty("apodo")][Column("APODO")]
        public string Apodo { get; set; }
        [JsonProperty("email")][Column("EMAIL")]
        public string Email { get; set; }
        [JsonProperty("password")][Column("PASSWORD")]
        public string Password { get; set; }
        [JsonProperty("id_rol")][Column("ID_ROL")]
        public int Id_rol { get; set; }
        [JsonIgnore]
        public RolItem rolItem { get; set; }
        [JsonIgnore]
        public ICollection<CarroItem> CarroItems { get; set; }
    }
}