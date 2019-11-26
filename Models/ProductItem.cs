using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskSharpHTTP.Models
{
    public class ProductItem
    {
        [Key][JsonProperty("id")][Column("ID_PRODUCTO")]
        public int Id { get; set; }
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
        [ForeignKey("ID_CATEGORIA")] [JsonProperty("id_categoria")][Column("ID_CATEGORIA")]
        public virtual CategoriaItem Id_categoria { get; set; }
        [JsonProperty("cantidad")][Column("CANTIDAD")]
        public int Cantidad { get; set; }
        
    }
}