using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskSharpHTTP.Models
{
    public class PersonaItem
    {
         
        [Key][JsonProperty("id")][Column("ID_PERSONA")]
        public int Id { get; set; }
        [JsonProperty("imagen")][Column("IMAGEN")]
        public byte[] Imagen { get; set; }
        [JsonProperty("nombre")][Column("NOMBRES")]
        public string Nombre { get; set; }
        [JsonProperty("apellido")][Column("APELLIDOS")]
        public string Apellido { get; set; }
        [JsonProperty("telefono")][Column("TELEFONO")]
        public string Telefono { get; set; }
        [ForeignKey("ID_DEPARTAMENTO")][JsonProperty("id_departamento")][Column("ID_DEPARTAMENTO")]
        public virtual DepartamentoItem Id_departamento { get; set; }
        [ForeignKey("ID_CIUDAD")][JsonProperty("id_ciudad")][Column("ID_CIUDAD")]
        public virtual CiudadItem Id_ciudad { get; set; }
        [JsonProperty("direccion")][Column("DIRECCION")]
        public string Direccion { get; set; }
        [JsonProperty("apodo")][Column("APODO")]
        public string Apodo { get; set; }
        [JsonProperty("email")][Column("EMAIL")]
        public string Email { get; set; }
        [JsonProperty("password")][Column("PASSWORD")]
        public string Password { get; set; }
        [ForeignKey("ID_ROL")][JsonProperty("id_rol")][Column("ID_ROL")]
        public virtual RolItem Id_rol { get; set; }
    }
}