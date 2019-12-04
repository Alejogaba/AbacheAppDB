using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskSharpHTTP.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        
        private readonly AbacheContext _context;
        public ProductController(AbacheContext context)
        {
            _context=context;
      
        }
        //GET: api/product
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductItem>>> GetProducto()
        {
            return await _context.ProductItems.ToListAsync();
        }


        //Get: api/product:id
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductItem>> GetProducto(int id)
        {
            var productitem = await _context.ProductItems.FindAsync(id);
            if (productitem==null)
            {
                return NotFound();
            }
            return productitem;
        }
        [HttpGet("buscar")]
        public async Task<List<ProductItem>> Buscarproducto(string nombre)
        {
            var productitem = await _context.ProductItems.Where(p => p.Titulo == nombre).ToListAsync();
          
            return productitem;
        }

        [HttpGet("buscarcategoria")]
        public async Task<List<ProductItem>> Buscarcategoria(int categoria)
        {
            var productitem = await _context.ProductItems.Where(p => p.Id_categoria == categoria).ToListAsync();
          
            return productitem;
        }

        //Post: api/product
        [HttpPost]
        public async Task<ActionResult<ProductItem>> PostProducto(ProductItem productItem)
        {
            _context.ProductItems.Add(productItem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProducto), new { id = productItem.Id_producto }, productItem);
        }
        

        //Put: api/product:id
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProducto(int id,ProductItem item)
        {
            if (id != item.Id_producto)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //Delete: api/product:id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var Item = await _context.ProductItems.FindAsync(id);
            if (Item==null)
            {
                return NotFound();
            }
            _context.ProductItems.Remove(Item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        }
   
}