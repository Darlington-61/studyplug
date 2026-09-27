Add-Type -AssemblyName System.Drawing

$src = "C:\Users\WORK SPACE\.gemini\antigravity\brain\344c1ee8-440e-4c0f-9e9a-a347f183ae45\.user_uploaded\media_1790292523992.jpg"
$img = [System.Drawing.Image]::FromFile($src)

Write-Host "Width: $($img.Width), Height: $($img.Height)"

# In media_1790292523992.jpg: 5 columns x 2 rows
# Column 3, Row 2 contains Screen 8 (Motivation)
# Let's crop the motivation hero illustration at the top of screen 8
$colWidth = [int]($img.Width / 5)
$rowHeight = [int]($img.Height / 2)

# Screen 8 (Motivation) is at col index 3, row index 1
$screen8X = $colWidth * 3
$screen8Y = $rowHeight * 1

# Inside screen 8, the illustration is roughly x: +5% to +95% of colWidth, y: +10% to +35% of rowHeight
$cropX = [int]($screen8X + ($colWidth * 0.05))
$cropY = [int]($screen8Y + ($rowHeight * 0.165))
$cropW = [int]($colWidth * 0.90)
$cropH = [int]($rowHeight * 0.26)

$bmp = New-Object System.Drawing.Bitmap $cropW, $cropH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$destRect = New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH
$g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$destDir = "public\images"
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir }

$bmp.Save("public\images\crop_motivation.png", [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Host "Saved public\images\crop_motivation.png successfully!"
