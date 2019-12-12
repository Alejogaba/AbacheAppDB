using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskSharpHTTP.Models
{
    [Table("PRODUCTITEM")]
    public class ProductItem
    {
        [Key][JsonProperty("id")][Column("ID_PRODUCTO")]
        public int Id_producto { get; set; }
        [JsonProperty("titulo")][Column("TITULO",TypeName="VARCHAR2(50)")]
        public string Titulo { get; set; }
         [JsonProperty("descripcion")][Column("DESCRIPCION",TypeName="VARCHAR2(500)")]
        public string Descripcion { get; set; }
         [JsonProperty("estilo_color")][Column("ESTILO_COLOR",TypeName="VARCHAR2(15)")]
        public string Estilo_color { get; set; }
         [JsonProperty("precio")][Column("PRECIO")]
        public int Precio { get; set; }
        [JsonProperty("inventario")][Column("INVENTARIO")]
        public int Inventario { get; set; }
        [JsonProperty("id_vendedor")][Column("ID_VENDEDOR")]
        public int Id_persona { get; set; }
        [JsonIgnore]
        public PersonaItem PersonaItem { get; set; }
        [JsonIgnore]
        public ICollection<CarroItem> CarroItems { get; set; }
    }
}