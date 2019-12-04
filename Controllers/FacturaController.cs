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
    public class FacturaController : Controller
    {
        
        private readonly AbacheContext _context;
        public FacturaController(AbacheContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FacturaItem>>> GetFactura()
        {
            return await _context.FacturaItems.ToListAsync();
        }

         [HttpGet("getfactura")]
          public async Task<ActionResult<FacturaItem>> Login(int user)
        {
            var personaitem = await _context.FacturaItems.Where(p => p.Id_persona==user).FirstOrDefaultAsync();
          if (personaitem==null)
            {
                return NotFound();
            }
            return personaitem;
        }
        [HttpGet("getfacturadetalle")]
        public async Task<List<FacturaDetalleItem>> Buscarproducto(int factura)
        {
            var productitem = await _context.facturaDetalleItems.Where(p => p.Id_factura==factura).ToListAsync();
          
            return productitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<FacturaItem>> PostFactura(FacturaItem facturaitem)
        {
            _context.FacturaItems.Add(facturaitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFactura), new {id = facturaitem.Id_factura}, facturaitem);
        }

     
        }
   
}