using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskSharpHTTP.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarroController : Controller
    {
        
        private readonly AbacheContext _context;
        public CarroController(AbacheContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarroItem>>> GetCarro()
        {
            return await _context.CarroItems.ToListAsync();
        }

        [HttpGet("buscar-producto")]
        public async Task<List<ProductItem>> BuscarProducto(int user)
        {
           var productitem = _context.ProductItems
                    .FromSql("SELECT ID_PRODUCTO,TITULO,DESCRIPCION,ESTILO_COLOR,PRECIO,PRODUCTITEM.IMAGEN,ID_CATEGORIA,INVENTARIO,ID_VENDEDOR FROM CARROITEM JOIN PERSONAITEM USING (ID_PERSONA) JOIN PRODUCTITEM USING (ID_PRODUCTO) WHERE ID_PERSONA={0} ORDER BY ID_PRODUCTO",user)
                    .ToListAsync();
            return await productitem;
        }
        [HttpGet("buscar-carro")]
        public async Task<List<CarroItem>> BuscarCarro(int user)
        {
           var productitem = _context.CarroItems
                    .FromSql("SELECT ID_CARRO,ID_PERSONA,ID_PRODUCTO,CANTIDAD,TOTAL,ESTADO FROM CARROITEM JOIN PERSONAITEM USING (ID_PERSONA) JOIN PRODUCTITEM USING (ID_PRODUCTO) WHERE ID_PERSONA={0} ORDER BY ID_PRODUCTO",user)
                    .ToListAsync();
            return await productitem;
        }
        [HttpGet("buscar-persona")]
        public async Task<ActionResult<PersonaItem>> BuscarUsuario(int user)
        {
           var personaitem = _context.PersonaItems
                    .FromSql("SELECT id_persona,PERSONAITEM.imagen,nombres,apellidos,telefono,id_departamento,id_ciudad,direccion,email,id_rol FROM CARROITEM JOIN PERSONAITEM USING (ID_PERSONA) JOIN PRODUCTITEM USING (ID_PRODUCTO) WHERE ID_PERSONA={0}",user)
                    .FirstOrDefaultAsync();
            if (personaitem==null)
            {
                return NotFound();
            }
            return await personaitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<CarroItem>> PostCarro(CarroItem carroitem)
        {
            _context.CarroItems.Add(carroitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCarro), new {id = carroitem.Id_carro}, carroitem);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var Item = await _context.CarroItems.FindAsync(id);
            if (Item==null)
            {
                return NotFound();
            }
            _context.CarroItems.Remove(Item);
            await _context.SaveChangesAsync();
            return NoContent();
        }

     
        }
   
}