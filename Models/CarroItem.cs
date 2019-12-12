using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
    [Table("CARROITEM")]
    public class CarroItem
    {
        
        [Key][JsonProperty("id")][Column("ID_CARRO")]
        public int Id_carro { get; set; }
        [JsonProperty("id_cliente")][Column("ID_PERSONA")]
        public int Id_persona { get; set; }
        [JsonIgnore]
        public PersonaItem PersonaItem { get; set; }
        [JsonProperty("id_producto")][Column("ID_PRODUCTO")]
        public int Id_producto { get; set; }
        [JsonIgnore]
        public ProductItem ProductItem { get; set; }
        [JsonProperty("cantidad")][Column("CANTIDAD",TypeName="Number(3)")]
        public int Cantidad { get; set; }
        [JsonProperty("total")][Column("TOTAL")]
        public int Total { get; set; }
        [JsonProperty("estado")][Column("ESTADO",TypeName="varchar2(30)")]
        public string Estado { get; set; }
    }
}
