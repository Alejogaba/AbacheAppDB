using Microsoft.EntityFrameworkCore;

namespace TaskSharpHTTP.Models
{
    public class AbacheContext:DbContext
    {
        public AbacheContext(DbContextOptions<AbacheContext>  options) :
base (options)
{
}
public DbSet <ProductItem> ProductItems { get ; set ;}
public DbSet <CategoriaItem> CategoriaItems { get ; set ;}
public DbSet <PersonaItem> PersonaItems { get ; set ;}
public DbSet<CarroItem> CarroItems { get; set; }
public DbSet<FacturaItem> FacturaItems { get; set; }
public DbSet<FacturaDetalleItem> facturaDetalleItems { get; set; }
public DbSet<DepartamentoItem> DepartamentoItems { get; set; }
public DbSet<CiudadItem> CiudadItems { get; set; }
    }
}