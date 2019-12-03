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
    public class CategoriaController : Controller
    {
        
        private readonly AbacheContext _context;
        public CategoriaController(AbacheContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoriaItem>>> GetPersona()
        {
            return await _context.CategoriaItems.ToListAsync();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoriaItem>> GetPersona(int id)
        {
            var categoriaitem = await _context.CategoriaItems.FindAsync(id);
            if (categoriaitem==null)
            {
                return NotFound();
            }
            return categoriaitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<CategoriaItem>> PostPersona(CategoriaItem categoriaitem)
        {
            _context.CategoriaItems.Add(categoriaitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = categoriaitem.Id_categoria }, categoriaitem);
        }

     
        }
   
}