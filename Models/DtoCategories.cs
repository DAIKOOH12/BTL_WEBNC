using System.ComponentModel.DataAnnotations;

namespace QLTV.Models
{
    public class DtoCategories
    {
        [Required(ErrorMessage = "Mã danh mục không được để trống"), MaxLength(100)]
        public string SMaDanhMuc { get; set; } = "";

        [Required(ErrorMessage = "Tên danh mục không được để trống"), MaxLength(100)]
        public string? STenDanhMuc { get; set; } = "";
    }
}
