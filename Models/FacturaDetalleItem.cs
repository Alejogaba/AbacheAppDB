using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace TaskSharpHTTP.Models
{
     [Table("FACTURADETALLEITEM")]
    public class FacturaDetalleItem
    {
       [Key][JsonProperty("id")][Column("ID_FACTURADETALLE")]
        public int Id_facturadetalle { get; set; }
        [JsonProperty("id_factura")][Column("ID_FACTURA")]
        public int Id_factura { get; set; }
        [JsonIgnore]
        public FacturaItem facturaItem { get; set; }
        [JsonProperty("id_producto")][Column("ID_PRODUCTO")]
        public int Id_producto { get; set; }
        [JsonProperty("titulo_producto")][Column("TITULO",TypeName="VARCHAR2(50)")]
        public string Titulo { get; set; }
         [JsonProperty("estilo_color")][Column("ESTILO_COLOR",TypeName="VARCHAR2(15)")]
        public string Estilo_color { get; set; }
        [JsonProperty("cantidad_producto")][Column("CANTIDAD",TypeName="NUMBER(4)")]
        public int Cantidad { get; set; }
         [JsonProperty("precio_producto")][Column("PRECIO")]
        public int Precio { get; set; }
         [JsonProperty("total_producto")][Column("TOTAL_PRODUCTO")]
        public int Total_producto { get; set; }
         [JsonProperty("id_vendedor")][Column("ID_VENDEDOR")]
        public int Id_vendedor { get; set; }
    }
}