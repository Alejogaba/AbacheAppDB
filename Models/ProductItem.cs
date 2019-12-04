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
        [JsonProperty("titulo")][Column("TITULO")]
        public string Titulo { get; set; }
         [JsonProperty("descripcion")][Column("DESCRIPCION")]
        public string Descripcion { get; set; }
         [JsonProperty("estilo_color")][Column("ESTILO_COLOR")]
        public string Estilo_color { get; set; }
         [JsonProperty("precio")][Column("PRECIO")]
        public int Precio { get; set; }
        [JsonProperty("imagen")][Column("IMAGEN")]
        public byte[] Imagen { get; set; }
        [JsonProperty("id_categoria")][Column("ID_CATEGORIA")]
        public int Id_categoria { get; set; }
        [JsonIgnore]
        public CategoriaItem CategoriaItem { get; set; }
        [JsonProperty("inventario")][Column("INVENTARIO")]
        public int Cantidad { get; set; }
        [JsonProperty("id_vendedor")][Column("ID_VENDEDOR")]
        public int Id_persona { get; set; }
        [JsonIgnore]
        public PersonaItem PersonaItem { get; set; }
        [JsonIgnore]
        public ICollection<CarroItem> CarroItems { get; set; }
    }
}