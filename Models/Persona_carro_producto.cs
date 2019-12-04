using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskSharpHTTP.Models
{
    public class Persona_carro_producto
    {
         [JsonProperty("id_producto")][Column("ID_PRODUCTO")]
        public int Id_producto { get; set; }
        [Key][JsonProperty("id_persona")][Column("ID_PERSONA")]
        public int Id_persona { get; set; }
        [JsonProperty("cantidad")]
        public int Cantidad { get; set; }
        [JsonProperty("total")]
        public int Total { get; set; }
        [JsonProperty("estado")]
        public string Estado { get; set; }
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
        [JsonProperty("id_ciudad")][Column("ID_CIUDAD")]
        public int Id_ciudad { get; set; }
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
        [JsonProperty("titulo")][Column("TITULO")]
        public string Titulo { get; set; }
         [JsonProperty("descripcion")][Column("DESCRIPCION")]
        public string Descripcion { get; set; }
         [JsonProperty("estilo_color")][Column("ESTILO_COLOR")]
        public string Estilo_color { get; set; }
         [JsonProperty("precio")][Column("PRECIO")]
        public int Precio { get; set; }
        [JsonProperty("imagen")][Column("IMAGEN")]
        public byte[] Imagen_p { get; set; }
        [JsonProperty("id_categoria")][Column("ID_CATEGORIA")]
        public int Id_categoria { get; set; }
        [JsonProperty("cantidad")][Column("CANTIDAD")]
        public int Cantidad_P { get; set; }
    }
}