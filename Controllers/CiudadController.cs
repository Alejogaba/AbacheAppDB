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
    public class CiudadController : Controller
    {
        
        private readonly AbacheContext _context;
        public CiudadController(AbacheContext context)
        {
            _context=context;
      
        }
       
       [HttpGet("buscar")]
        public async Task<List<CiudadItem>> Buscarproducto(int dept)
        {
            var productitem = await _context.CiudadItems.Where(p => p.Id_departamento == dept).ToListAsync();
          
            return productitem;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<CiudadItem>> GetPersona(int id)
        {
            var categoriaitem = await _context.CiudadItems.FindAsync(id);
            if (categoriaitem==null)
            {
                return NotFound();
            }
            return categoriaitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<CiudadItem>> PostPersona(CiudadItem ciudaditem)
        {
            _context.CiudadItems.Add(ciudaditem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = ciudaditem.Id_ciudad }, ciudaditem);
        }

     
        }
   
}